type Props = {
	fullscreen?: boolean;
};
const Loading: React.FC<Props> = (props) => {
	return (
		<div className={`flex ${props.fullscreen ? 'h-screen' : ''}`}>
			<div className="m-auto">
				<svg
					width="80"
					height="80"
					viewBox="0 0 38 38"
					xmlns="http://www.w3.org/2000/svg"
					data-testid="tail-spin-svg"
				>
					<defs>
						<linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
							<stop stopColor="#4fa94d" stopOpacity="0" offset="0%"></stop>
							<stop stopColor="#4fa94d" stopOpacity=".631" offset="63.146%"></stop>
							<stop stopColor="#4fa94d" offset="100%"></stop>
						</linearGradient>
					</defs>
					<g fill="none" fillRule="evenodd">
						<g transform="translate(1 1)">
							<path
								d="M36 18c0-9.94-8.06-18-18-18"
								id="Oval-2"
								stroke="#4fa94d"
								strokeWidth="2"
							>
								<animateTransform
									attributeName="transform"
									type="rotate"
									from="0 18 18"
									to="360 18 18"
									dur="0.9s"
									repeatCount="indefinite"
								></animateTransform>
							</path>
							<circle fill="#fff" cx="36" cy="18" r="1">
								<animateTransform
									attributeName="transform"
									type="rotate"
									from="0 18 18"
									to="360 18 18"
									dur="0.9s"
									repeatCount="indefinite"
								></animateTransform>
							</circle>
						</g>
					</g>
				</svg>
			</div>
		</div>
	);
};
export default Loading;
