import Links_1 from './Links_1';
import Links_2 from './Links_2';

import navbarRadioLogo from './assets/navbar-radio-logo.png'

const Navbar = () => (
	<nav>
		<section className="flex">
			<Links_1 />
			<div>
				<img className="w-[100px]" src={navbarRadioLogo}/>
			</div>
			<Links_2 />
		</section>
	</nav>
)

export default Navbar;
