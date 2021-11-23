function Button({ children, setCount }) {
    return (
        <div>
            <button class="test-button" onClick={() => setCount(count => count + 1)}>{children} +1</button>
        </div>
    );
}

export default Button;
