import { links_2 } from './listsLinks';

const Links_2 = () => (
	<ul className="links_1 flex">
		{links_2.map((list, key) => (
			<li key={key}>{list.name}</li>
		))}	
	</ul>
)

export default Links_2;
