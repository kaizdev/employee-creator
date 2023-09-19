const ErrorMessage = ({ error }: any) => {
    if (!error) return null;
    return <span className="text-red-500">{error.message}</span>;
};
export default ErrorMessage;
