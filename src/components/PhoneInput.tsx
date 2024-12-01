type PhoneInputProps = {
    value: string | undefined;
    onChange: (val: string) => void;
};

export default function PhoneInput({ value, onChange }: PhoneInputProps) {
    return (
        <div className="flex items-center gap-x-3 justify-between w-full">
            <button
                data-dropdown-toggle="dropdown-phone"
                className="w-full flex justify-between items-center rounded-lg py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
                type="button"
            >
                <div className="flex items-center justify-between gap-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        aria-hidden="true"
                        className="h-4 w-4"
                        viewBox="0 0 32 32"
                    >
                        <path fill="#fff" d="M1 11H31V21H1z"></path>
                        <path
                            d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                            fill="#4498b3"
                        ></path>
                        <path
                            d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                            transform="rotate(180 16 24)"
                            fill="#55b44b"
                        ></path>
                        <path fill="#be2a2c" d="M1 12H31V13H1z"></path>
                        <path fill="#be2a2c" d="M1 19H31V20H1z"></path>
                        <path
                            d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                            opacity=".15"
                        ></path>
                        <path
                            d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                            fill="#fff"
                            opacity=".2"
                        ></path>
                        <path
                            d="M7.417,6.51c-.127-.021-.257-.033-.39-.033-1.291,0-2.338,1.047-2.338,2.338s1.047,2.338,2.338,2.338c.133,0,.263-.012,.39-.033-1.105-.186-1.948-1.146-1.948-2.305s.843-2.119,1.948-2.305Z"
                            fill="#fff"
                        ></path>
                        <path
                            fill="#fff"
                            d="M9.741 10.181L9.564 9.635 9.387 10.181 8.813 10.181 9.277 10.518 9.1 11.063 9.564 10.726 10.028 11.063 9.851 10.518 10.315 10.181 9.741 10.181z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M12.899 10.181L12.722 9.635 12.544 10.181 11.971 10.181 12.435 10.518 12.258 11.063 12.722 10.726 13.186 11.063 13.009 10.518 13.473 10.181 12.899 10.181z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M12.722 6.477L12.544 7.023 11.971 7.023 12.435 7.36 12.258 7.905 12.722 7.568 13.186 7.905 13.009 7.36 13.473 7.023 12.899 7.023 12.722 6.477z"
                        ></path>
                    </svg>
                    <span className="text-gray-600">+(998) UZ</span>
                </div>
                <svg
                    className=" w-2.5 h-2.5 text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            <div className="w-full">
                <input
                    type="text"
                    id="phone-input"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    aria-describedby="helper-text-explanation"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    placeholder="97 777 77 77"
                    required
                />
            </div>
        </div>
    );
}
