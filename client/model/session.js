import { http_get, http_post, http_delete } from "../helpers/";

class SessionManager {
    currentUser() {
       return window.currentUserS3()
    }

    oauth2(url, next) {
        const u = new URL(document.location);
        u.pathname = url;
        if (next) u.searchParams.set("next", next);
        return http_get(u.toString())
            .then((data) => data.result);
    }

    middleware(formData) {
        return Promise.resolve(
            "/api/session/auth/?action=redirect&label=" + (formData["label"] || ""),
        );
    }

    authenticate(params) {
        return window.authenticateS3(params)
    }

    logout() {
        return window.logoutS3()
    }
}

export const Session = new SessionManager();
