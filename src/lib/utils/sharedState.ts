export type SharedState<T> = {
	get(): T;
	set(x: T): void;
};

export const sharedState = <T>(initialValue: T) => {
	let state = $state(initialValue);
	return {
		get() {
			return state;
		},
		set(x: T) {
			state = x;
		}
	};
};
