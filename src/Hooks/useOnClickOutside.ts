import {MutableRefObject, useEffect} from "react";

/**
 * Hook for executing handler if click was outside HTML element ref
 * @param {MutableRefObject<any>} ref ref to HTML element
 * @param {function} handler handler, that executing after outside click
 */
const useOnClickOutside = (
	ref: MutableRefObject<any>,
	handler: (event?: MouseEvent | TouchEvent) => void
) => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref, handler]);
};

export default useOnClickOutside;
