/* /components/Layout.js */

import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Container, Nav, NavItem } from "reactstrap";

export default function Layout(props) {
	const title = "Welcome to Nextjs";
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
					integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
					crossOrigin="anonymous"
				/>
				<script src="https://js.stripe.com/v3" async />
			</Head>
			<header>
				<style jsx>
					{`
						a {
							color: white;
						}
					`}
				</style>
				<Nav className="navbar navbar-dark bg-dark">
					<NavItem>
						<Link className="navbar-brand" href="/">
							Home
						</Link>
					</NavItem>

					<NavItem className="ml-auto">
						<Link className="nav-link" href="/login">
							Sign In
						</Link>
					</NavItem>

					<NavItem>
						<Link className="nav-link" href="/register">
							Sign Up
						</Link>
					</NavItem>
				</Nav>
			</header>
			<Container>{props.children}</Container>
		</div>
	);
}
