import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import starsIcon from '../../assets/stars.svg';
import starsBlackIcon from '../../assets/stars-black.svg';

interface ICustomSwitch {
	toggleShiny: () => void;
	isShiny: boolean;
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	'& .MuiSwitch-switchBase': {
		margin: 1,
		padding: 0,
		transform: 'translateX(6px)',
		'&.Mui-checked': {
			color: '#fff',
			transform: 'translateX(22px)',
			'& .MuiSwitch-thumb:before': {
				backgroundImage: `url(${starsIcon})`,
				backgroundSize: '20px',
			},
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: '#aab4be',
				...theme.applyStyles('dark', {
					backgroundColor: '#8796A5',
				}),
			},
		},
	},
	'& .MuiSwitch-thumb': {
		backgroundColor: '#C40F02',
		width: 32,
		height: 32,
		'&::before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundImage: `url(${starsBlackIcon})`,
			backgroundSize: '20px',
		},
		...theme.applyStyles('dark', {
			backgroundColor: '#003892',
		}),
	},
	'& .MuiSwitch-track': {
		opacity: 1,
		backgroundColor: '#aab4be',
		borderRadius: 20 / 2,
		...theme.applyStyles('dark', {
			backgroundColor: '#8796A5',
		}),
	},
}));

export const CustomSwitch = ({ isShiny, toggleShiny }: ICustomSwitch) => {
	return (
		<>
			<MaterialUISwitch sx={{ m: 1 }} value={isShiny} onClick={toggleShiny} />
		</>
	);
};
