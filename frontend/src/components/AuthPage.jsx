import React, { useState } from 'react';

const AuthModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogin = () => {
        // Додатковий код для авторизації користувача
        // Можна включити відправку даних на сервер для авторизації
        alert('Logged in!');
        closeModal();
    };

    return (
        <div>
            <button onClick={openModal}>Log In</button>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Log In</h2>
                        <form>
                            <label>
                                Username:
                                <input type="text" />
                            </label>
                            <label>
                                Password:
                                <input type="password" />
                            </label>
                            <button type="button" onClick={handleLogin}>Log In</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthModal;
