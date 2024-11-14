export async function getGithubContributions() {
    const data = await fetch("https://api.github.com/graphql", {
        cache: "force-cache",
        method: "POST",
        headers: {
            "Accept": "application/vnd.github+json",
            "Authorization": `Bearer ${process.env.GITHUB_API_KEY}`,
            "X-GitHub-Api-Version": "2022-11-28"
        },
        body: JSON.stringify({
            query: `
            query getUser { 
                user(login: "JRBuizon"){
                    contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                        contributionDays {
                            contributionCount
                            date
                        }
                        }
                    }
                    }
                }
            }
            `
        })
    }).then((res) => res.json());
    return data;
}
