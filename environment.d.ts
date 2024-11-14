declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GITHUB_API_KEY: string;
        }
    }
}

export { };
