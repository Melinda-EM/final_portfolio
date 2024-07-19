import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from './Projects';
import Contact from '@/components/Contact';

import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Melinda Esteves Mendes</title>
				<meta name="description" content="Melinda Esteves Mendes" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
			</Head>
			<div>
				{/* <About />
				<Skills />
				<Projects />
				<Contact /> */}
			</div>
		</>
	);
};

export default Home;