import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        {
            title: "Investment Basics",
            name: "Principles of Investing: Getting Started",
            text: `Investing is the process of putting money into various assets with the expectation of future profit. The key principle is to find a balance between returns and risks. Beginners should start by understanding basic assets like stocks, bonds, and funds.

1. **Stocks** represent shares in a company, allowing investors to earn from its growth and dividends.
2. **Bonds** are debt securities, generally less risky than stocks but also offering lower returns.
3. **Funds** pool money from multiple investors, distributing it across various assets to reduce risk.

Investing requires both patience and research. Define your financial goals and investment horizon first. Then, diversify your portfolio across different assets to balance potential returns and risks. Regularly review your investment choices and update them as your goals or market conditions change. Education, discipline, and long-term planning are crucial for successful investing. Consider learning about advanced options, such as real estate or exchange-traded funds (ETFs), to expand your portfolio over time. Embrace the principle of compounding returns—let your profits reinvest to grow your wealth faster.`,
            image_link: "https://i.ibb.co/rF6NX4j/6.webp"
        },
        {
            title: "Budgeting Essentials",
            name: "Mastering Budgeting: Your Path to Financial Health",
            text: `Budgeting is the foundation of financial health, helping you plan, control, and track your spending. A solid budget ensures that you cover essential expenses, meet savings goals, and avoid debt.

1. **Calculate Your Income**: List all income sources, including salary, side hustles, and passive income.
2. **Identify Essential Expenses**: These include housing, utilities, groceries, and other necessary costs.
3. **Allocate for Savings**: Set aside a portion for emergency funds, long-term goals, and retirement.
4. **Track Discretionary Spending**: Allocate a limited amount for leisure and non-essential purchases.

Effective budgeting involves adjusting categories based on monthly spending, prioritizing needs over wants, and reducing unnecessary costs. A budget helps prevent debt, save consistently, and achieve financial goals faster. Many people benefit from budget apps or spreadsheets to monitor and adjust expenses each month. Reviewing spending habits over time builds better financial awareness, paving the way for sustainable financial health.`,
            image_link: "https://i.ibb.co/HYHTJhv/5.webp"
        },
        {
            title: "Retirement Planning",
            name: "Building a Secure Retirement Plan",
            text: `Retirement planning involves setting financial targets, saving, and investing strategically. The earlier you start, the more time your money has to grow through compound interest. Utilize tax-advantaged retirement accounts like 401(k)s or IRAs to boost your savings.

1. **Define Retirement Goals**: Consider retirement lifestyle, expenses, healthcare, and leisure plans.
2. **Estimate Savings Needs**: Use calculators to determine annual savings for reaching your retirement goals.
3. **Select Investments**: Choose between stocks, bonds, and funds based on risk tolerance.
4. **Regularly Review**: Adjust contributions and investments to stay on target.

Retirement planning also means considering inflation, healthcare costs, and potential lifestyle changes. Prioritize saving early and use employer-matching contributions if available. Maintaining a balanced portfolio reduces the impact of market fluctuations, helping your savings grow steadily. Periodic reviews ensure your plan adapts to life changes, giving you peace of mind and financial independence post-retirement.`,
            image_link: "https://i.ibb.co/y4cRR4r/4.webp"
        },
        {
            title: "Understanding Taxes",
            name: "Tax Basics: Essential Knowledge for Financial Success",
            text: `Taxes are an essential aspect of financial success. Knowing the basics allows you to optimize income and savings. Tax categories include income tax, capital gains tax, and property tax.

1. **Income Tax**: This is charged on wages, business income, and some investments. Your tax rate varies by income bracket, so understanding it helps in accurate planning.
2. **Capital Gains Tax**: Applies to profits from investments. Long-term gains on assets held over a year often incur lower rates.
3. **Tax Deductions and Credits**: Deductions lower taxable income, while credits directly reduce the tax owed. Common deductions include student loans, mortgage interest, and business expenses.
4. **Tax-Advantaged Accounts**: Retirement, health savings, and education accounts reduce taxable income.

Strategic tax planning is essential for maximizing income. Educate yourself about eligible deductions and credits, and consider consulting tax professionals to optimize your strategy. Regular tax reviews and adjustments ensure you’re leveraging all benefits available to you, helping to build long-term financial stability.`,
            image_link: "https://i.ibb.co/z8JkjpN/3.webp"
        },
        {
            title: "Setting Financial Goals",
            name: "Creating and Reaching Financial Milestones",
            text: `Setting financial goals is essential for creating a roadmap for your money. Financial goals are unique to each individual but typically include emergency funds, saving for major purchases, retirement planning, and paying off debt.

1. **Define Short-Term Goals**: Start with goals you want to achieve within a year, like building an emergency fund or saving for a vacation.
2. **Create Mid-Term Goals**: These goals, like buying a car or pursuing further education, often take 1-5 years.
3. **Identify Long-Term Goals**: Long-term goals, like retirement or buying property, require ongoing saving and planning.
4. **Track Progress Regularly**: Use apps, spreadsheets, or financial advisors to review your goals monthly or quarterly.

Achieving financial goals requires breaking them down into manageable steps and consistently tracking progress. Adjust as needed based on income changes or unexpected expenses. Goal-setting helps you prioritize your spending and saving effectively, giving you clear motivation to achieve each milestone.`,
            image_link: "https://i.ibb.co/QXyZnmj/2.webp"
        },
        {
            title: "Managing Debt Wisely",
            name: "Effective Strategies for Debt Management",
            text: `Debt management is crucial to maintain financial health and creditworthiness. By strategically paying off debt, you free up funds for future investments and savings.

1. **Organize Your Debt**: List all debts, including credit cards, loans, and mortgages, along with interest rates.
2. **Prioritize High-Interest Debt**: Pay down debts with the highest interest rates first to save on interest over time.
3. **Set a Repayment Plan**: Establish a realistic monthly repayment amount based on your income and budget.
4. **Consider Consolidation Options**: Debt consolidation loans or balance transfer credit cards may reduce your interest rate, making debt easier to manage.

Effective debt management includes consistently paying more than the minimum payment, which accelerates debt repayment and reduces interest costs. By creating a debt repayment plan and sticking to it, you can work towards financial independence and improve your credit score, opening doors for future financial opportunities.`,
            image_link: "https://i.ibb.co/tMNgBvb/1.webp"
        }
    ],
};

const studySlice = createSlice({
    name: 'study',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { setItems } = studySlice.actions;
export default studySlice.reducer;
