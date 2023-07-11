import { Alert, Button, Card, Col, Form, Input, message, Row, Spin } from "antd";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useScreenSize from "../../hooks/useScreenSize";
import { setToken } from "../../AuthProvider/helpers";
import { API } from "../../constants/constants";

const Login = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { isDesktopView } = useScreenSize();
	const { setUser } = useAuthContext();
	const navigate = useNavigate();

	const onFinish = async (values) => {
		setIsLoading(true);
		try {
			const value = {
				identifier: values.email,
				password: values.password,
			};
			const response = await fetch(`${API}/auth/local`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(value),
			});

			const data = await response.json();
			if (data?.error) {
				throw data?.error;
			} else {
				// set the token
				setToken(data.jwt);

				// set the user
				setUser(data.user);

				message.success(`Welcome back ${data.user.username}!`);

				navigate("/", { replace: true });
			}
		} catch (error) {
			console.error(error);
			setError(error?.message ?? "Something went wrong!");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Fragment>
			<Row align="middle">
				<Col span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
					<Card title="Login">
						{error ? (
							<Alert
								className="alert_error"
								message={error}
								type="error"
								closable
								afterClose={() => setError("")}
							/>
						) : null}
						<Form
							name="basic"
							layout="vertical"
							onFinish={onFinish}
							autoComplete="off"
						>
							<Form.Item
								label="Email"
								name="email"
								rules={[
									{
										required: true,
										type: "email",
									},
								]}
							>
								<Input placeholder="Email address" />
							</Form.Item>

							<Form.Item
								label="Password"
								name="password"
								rules={[{ required: true }]}
							>
								<Input.Password placeholder="Password" />
							</Form.Item>

							<Form.Item>
								<Button
									type="primary"
									htmlType="submit"
									className="login_submit_btn"
								>
									Login {isLoading && <Spin size="small" />}
								</Button>
							</Form.Item>
						</Form>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Login;