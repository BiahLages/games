import styled from "styled-components";

export const SCard = styled.div`
	margin-top: 30px;
	border: solid 1px #fff;
	cursor: pointer;
`;

export const STitle = styled.h2`
	color: #fff;
	font-weight: 300;
`;
export const SDate = styled.div`
	color: #ccc;
	font-weight: 300;
	margin: 6px 0;
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
