import React from "react";
import styles from "./Footer.module.css"

/**
 * Footer component
 * @component
 */
const AppFooter = () => {
	return (
		<div className={styles.mainFooterCentered}>
			<div className={styles.mainFooter}>
				<p>
					Created by
					<a href="https://pashabezk.github.io/MainPage" target="_blank" rel="noreferrer"> pashabezk</a>
				</p>
			</div>
		</div>
	);
};

export default AppFooter;