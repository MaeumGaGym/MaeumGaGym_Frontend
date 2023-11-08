export type iconName =
    "arrowLeft"
    | "arrowRight"
    | "arrowUp"
    | "arrowDown"
    | "chevronLeft"
    | "chevronRight"
    | "chevronUp"
    | "chevronDown"
    | "eye"
    | "eyeOff"

type icon = {
    path: string;
    viewBox: string;
}

export const IconSet: Record<iconName, icon> = {
    arrowLeft:{
        path: "M20.0002 11V13H8.00016L13.5002 18.5L12.0802 19.92L4.16016 12L12.0802 4.08L13.5002 5.5L8.00016 11H20.0002Z",
        viewBox: "0 0 24 24"
    },
    arrowRight:{
        path: "M4 11V13H16L10.5 18.5L11.92 19.92L19.84 12L11.92 4.08L10.5 5.5L16 11H4Z",
        viewBox: "0 0 24 24"
    },
    arrowUp:{
        path: "M13.0001 20H11.0001V8L5.50008 13.5L4.08008 12.08L12.0001 4.16L19.9201 12.08L18.5001 13.5L13.0001 8V20Z",
        viewBox: "0 0 24 24"
    },
    arrowDown:{
        path: "M11.0001 4H13.0001V16L18.5001 10.5L19.9201 11.92L12.0001 19.84L4.08008 11.92L5.50008 10.5L11.0001 16V4Z",
        viewBox: "0 0 24 24"
    },
    chevronLeft:{
        path: "M15.41 16.58L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.58Z",
        viewBox: "0 0 24 24"
    },
    chevronRight:{
        path: "M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z",
        viewBox: "0 0 24 24"
    },
    chevronUp:{
        path: "M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z",
        viewBox: "0 0 24 24"
    },
    chevronDown:{
        path: "M7.41 8.58L12 13.17L16.59 8.58L18 10L12 16L6 10L7.41 8.58Z",
        viewBox: "0 0 24 24"
    },
    eye: {
        path: "M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z",
        viewBox: "0 0 24 24"
    },
    eyeOff:{
        path: "M11.83 9L15 12.16C15 12.11 15 12.05 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.94 9 11.89 9 11.83 9ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.77 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 11.21 7.2 10.47 7.53 9.8ZM2 4.27L4.28 6.55L4.73 7C3.08 8.3 1.78 10 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.81 19.08L19.73 22L21 20.73L3.27 3M12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 12.64 16.87 13.26 16.64 13.82L19.57 16.75C21.07 15.5 22.27 13.86 23 12C21.27 7.61 17 4.5 12 4.5C10.6 4.5 9.26 4.75 8 5.2L10.17 7.35C10.74 7.13 11.35 7 12 7Z",
        viewBox: "0 0 24 24"
    },
}