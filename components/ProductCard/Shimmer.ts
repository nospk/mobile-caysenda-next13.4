export const shimmer = `<svg width="800" height="800" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<defs>
								<linearGradient id="g">
								<stop stop-color="#333" offset="20%" />
								<stop stop-color="#222" offset="50%" />
								<stop stop-color="#333" offset="70%" />
								</linearGradient>
							</defs>
							<rect width="800" height="800" fill="#333" />
							<rect id="r" width="800" height="800" fill="url(#g)" />
							<animate xlink:href="#r" attributeName="x" from="-800" to="800" dur="1s" repeatCount="indefinite"  />
						</svg>`;