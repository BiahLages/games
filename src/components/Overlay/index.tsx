const Overlay = (props): JSX.Element => {
	return (
		<Overlay
			name="Overlay"
			onClick={props.overlayClick}
		>
			{props.children}
		</Overlay>
	);
};

export default Overlay;
