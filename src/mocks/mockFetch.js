const expensesResponse = {
    message: {
        nodes: [
            {
                "name": "Income"
            },
            {
                "name": "Salary"
            },
            {
                "name": "Bills"
            },
            {
                "name": "Electric Bill"
            },
            {
                "name": "Mobile Bill"
            }
        ],
        links: [
            {
                "source": 0,
                "target": 1,
                "value": 5000
            },
            {
                "source": 1,
                "target": 2,
                "value": 3000
            },
            {
                "source": 2,
                "target": 3,
                "value": 1000
            },
            {
                "source": 2,
                "target": 4,
                "value": 2000
            }
        ],
    },
};

export default async function mockFetch(url) {
    switch (url) {
        case "https://expenseTracker.track/expenses": {
            return {
                ok: true,
                status: 200,
                json: async () => expensesResponse,
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}