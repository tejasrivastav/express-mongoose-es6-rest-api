declare const config: {
    env: string | undefined;
    port: string | undefined;
    mongooseDebug: string | undefined;
    jwtSecret: string | undefined;
    mongo: {
        host: string | undefined;
        port: string | undefined;
    };
    LOG_FILE: string | undefined;
};
export default config;
