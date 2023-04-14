import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
	const [showModal, setShowModal] = useState(false);

	const handleOpen = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const actionBar = (
		<div>
			<Button onClick={handleClose} primary>
				I Accept
			</Button>
		</div>
	);

	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>Here is an important agreement for you to accept</p>
		</Modal>
	);
	return (
		<div className="relative">
			<Button onClick={handleOpen} primary>
				Open Modal
			</Button>
			{showModal && modal}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus
				ipsum ante, at rutrum lorem molestie eget. Nunc placerat augue ligula,
				et volutpat ex tempor sit amet. Vestibulum lacinia est leo, ut iaculis
				ipsum aliquet in. Duis a eros vel nibh posuere dictum id vitae tortor.
				Nam tempus sit amet diam sed elementum. Curabitur in turpis velit. Cras
				posuere sed mi sit amet hendrerit. Donec interdum eget metus sit amet
				dictum. Integer sed dignissim dolor. Fusce non arcu ligula. Aliquam
				luctus pulvinar feugiat. Nam nec arcu quis urna porttitor accumsan eu ac
				massa.
			</p>
		</div>
	);
}

export default ModalPage;