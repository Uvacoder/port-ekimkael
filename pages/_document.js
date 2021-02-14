import Document, { Html, Head, Main, NextScript } from "next/document"

class NextrapDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="shortcut icon" href="/icon.png" />
					<meta charSet="utf-8" />
					<meta name="theme-color" content="#000000" />
					<meta
						name="keywords"
						content="HTML, CSS, JavaScript, Nextjs, boilerplate, scraffolding, starter"
					/>
					<link rel="manifest" href="/manifest.json" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
						rel="stylesheet"
					/>

					<meta name="author" content="Ekim Kael" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default NextrapDocument
