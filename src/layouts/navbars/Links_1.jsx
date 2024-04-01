import { links_1 } from './listsLinks';

const Links_1 = () => (
	<ul className="links_1 flex">
		{links_1.map((list, key) => (
			<li key={key}>{list.name}</li>
		))}	
	</ul>
)

export default Links_1;
