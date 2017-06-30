(function() {var implementors = {};
implementors["bytes"] = [];
implementors["hyper"] = [];
implementors["libc"] = [];
implementors["mio"] = [];
implementors["openssl"] = [];
implementors["rand"] = [];
implementors["tokio_core"] = [];
implementors["websocket"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
