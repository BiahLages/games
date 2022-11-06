import Overlay from "../Overlay";

const Modal = (props): JSX.Element => {
	const handleClick = (e, canClose) => {
		e.stopPropagation();
		if (canClose) props.closeModal();
	};
	return (
		<Overlay overlayClick={props.closeModal}>
			<div
				onClick={(): void => {
					handleClick;
				}}
			>
				<span
					className="Modal-close"
					onClick={e => handleClick(e, true)}
				>
					+
				</span>
				<div className="Modal-body">{props.children}</div>
			</div>
		</Overlay>
	);
};

export default Modal;
