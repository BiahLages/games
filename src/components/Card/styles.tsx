import styled from "styled-components";

export const SCard = styled.div`
	border: solid 1px #fff;
	cursor: pointer;
	max-width: 250px;
	margin: 1rem;
	position: relative;
`;

export const SGameImg = styled.img`
	max-width: 250px;
	max-height: 250px;
`;

export const STitle = styled.h2`
	color: #fff;
	font-weight: 400;
	position: absolute;
	top: 80%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: rgb(2, 0, 36);
	background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(205, 10, 204, 1) 82%, rgba(0, 212, 255, 1) 100%);
	padding: 7px 0px 7px 0px;
	width: 100%;
	text-align: center;
`;
export const SDate = styled.text`
	color: #fff;
	font-weight: 300;
	position: absolute;
	top: 85%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* background-color: rgba(0, 0, 0, 0.4); */
	padding: 7px 0px 7px 0px;
	width: 100%;
	text-align: center;
	size: 15px;
	font-size: 200;
`;
export const SDescription = styled.p`
	color: #fff;
	font-weight: 300;
`;
export const SActionButton = styled.button`
	margin: 0 5px;
	padding: 8px 14px;
	background: rgba(155, 155, 155, 0.2);
	color: #fff;
	cursor: pointer;
	border: 1px solid #fff;
	outline: 0;
	font-weight: 300;
	:hover {
		opacity: 0.8;
	}
`;
