import React from 'react';
import {getAuth} from 'firebase/auth';
function ProfilePage() {
    const auth = getAuth();
    return (
        <div className="container h-100">
            Profile Page
            {JSON.stringify(auth.currentUser)}
        </div>
    )
}

export default ProfilePage;