import React from 'react'

function AlertToast({ title, message, status }) {
    return (
        <div>
            <div className={`alert alert-${status} alert-dismissible w-50 fade show`} role="alert">
                <strong>{title}</strong> {message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div >
    )
}

export default AlertToast
