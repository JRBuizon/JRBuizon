declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_GITHUB_API_KEY: string;
        }
    }
}

export { };
