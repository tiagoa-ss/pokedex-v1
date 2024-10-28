import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

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
				backgroundImage: `url(${'https://pokemons-assets-313462056628.s3-accesspoint.sa-east-1.amazonaws.com/stars.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUR66LM22JUPHY2W5%2F20241028%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241028T142706Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJHMEUCIBqZ8gLv%2FmiaxsCIH2R0JVN%2Fkl1hSbHUEE%2BGnoJp7VTLAiEAlX%2F2ufeFEjmId4qsi7mF4vdoPzZCaNmk2Gk%2B1HF1Jmsq6AIISBABGgwzMTM0NjIwNTY2MjgiDDb7TgEGnxJfbLRPzCrFAue42qLmJy8XC9wIBS6VVQmjl8MtBVi7QzhSWUJrGoPqm1j9uSEhJqfEELS3dkqUoz093szNSJtSSUT8TYySXqzSmYBB1DfdOOhDwLLoS3aSkVS51TuRZqTfnuvUjB442kS1UJg6Q%2BIZQxezAUH8Mh70zkUf8JRR8NCXvey3HdfaxKMN8bdgdkowVNXjq2nh0FNBlfD3kFwOqJT3zvz8Jf13iskS7BMY6MhT0gRCucPQInf4s%2BkypQlI5Y0wBXJO3t6PMDoQ60I01kawyCpO8arRDHCf7wxH9zqbT49L8Jg9pU4k1gGHTJfbMboauQHSTGcsN5h7LvmCyKhtEeNBBy6w6AVp5FgaN%2FIKSSdu%2BB0pdKT24A6NYWFE0T%2BonlzI19nqpLKi%2BCoI1Tn5foqNt2D5vOqi4WQmMUOOgD1PoMhASY8axYcw87L%2BuAY6swITEOL%2FSHNDc6wUQdJEGm3VwPirri%2F4vMFLMRjHvPA0u56YqFhgUcweOMa2fMNy%2F7zzoPQQ912Bb7t27SHcAyv%2BrDFYq3w0TDn9vfBRA4h33Jgv1t5%2Fbriot0Bd7Nkm2xR5TUnKkLvbrE5kgi4fQwUQvStbATullJDMKVVxb9IFgvFqlKQ0yXi5%2FGfmQkw1vpAgWDjzrBsk7Q0xxWJFLU%2FuBghtmll8%2FnOLYrFRYesaOhb7VvI2g8r0HU%2BLl4jXO41jh8peweE9wcmabVr4ZF6gtRWsY6Ebzbf1ZJeNLPEL5%2B77gcDJOcVLIMUlLyX7lTVKW2VVRUHC7H%2F6GxgLUEJGUlcvShWpyiuXcwA5PnfKmCJ3jXkoOtZ4h0BCVIyotgzKUz%2B0VycKS9IbZXKfUnOqk6YG&X-Amz-Signature=fe050475669ddc0b7e8ca9c94d3091d5da123b21b301312189eb3bf02e12164c&X-Amz-SignedHeaders=host&response-content-disposition=inline'})`,
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
		backgroundColor: '#C40F03',
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
			backgroundImage: `url(${'https://pokemons-assets-313462056628.s3-accesspoint.sa-east-1.amazonaws.com/stars-black.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUR66LM22JUPHY2W5%2F20241028%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241028T142630Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJHMEUCIBqZ8gLv%2FmiaxsCIH2R0JVN%2Fkl1hSbHUEE%2BGnoJp7VTLAiEAlX%2F2ufeFEjmId4qsi7mF4vdoPzZCaNmk2Gk%2B1HF1Jmsq6AIISBABGgwzMTM0NjIwNTY2MjgiDDb7TgEGnxJfbLRPzCrFAue42qLmJy8XC9wIBS6VVQmjl8MtBVi7QzhSWUJrGoPqm1j9uSEhJqfEELS3dkqUoz093szNSJtSSUT8TYySXqzSmYBB1DfdOOhDwLLoS3aSkVS51TuRZqTfnuvUjB442kS1UJg6Q%2BIZQxezAUH8Mh70zkUf8JRR8NCXvey3HdfaxKMN8bdgdkowVNXjq2nh0FNBlfD3kFwOqJT3zvz8Jf13iskS7BMY6MhT0gRCucPQInf4s%2BkypQlI5Y0wBXJO3t6PMDoQ60I01kawyCpO8arRDHCf7wxH9zqbT49L8Jg9pU4k1gGHTJfbMboauQHSTGcsN5h7LvmCyKhtEeNBBy6w6AVp5FgaN%2FIKSSdu%2BB0pdKT24A6NYWFE0T%2BonlzI19nqpLKi%2BCoI1Tn5foqNt2D5vOqi4WQmMUOOgD1PoMhASY8axYcw87L%2BuAY6swITEOL%2FSHNDc6wUQdJEGm3VwPirri%2F4vMFLMRjHvPA0u56YqFhgUcweOMa2fMNy%2F7zzoPQQ912Bb7t27SHcAyv%2BrDFYq3w0TDn9vfBRA4h33Jgv1t5%2Fbriot0Bd7Nkm2xR5TUnKkLvbrE5kgi4fQwUQvStbATullJDMKVVxb9IFgvFqlKQ0yXi5%2FGfmQkw1vpAgWDjzrBsk7Q0xxWJFLU%2FuBghtmll8%2FnOLYrFRYesaOhb7VvI2g8r0HU%2BLl4jXO41jh8peweE9wcmabVr4ZF6gtRWsY6Ebzbf1ZJeNLPEL5%2B77gcDJOcVLIMUlLyX7lTVKW2VVRUHC7H%2F6GxgLUEJGUlcvShWpyiuXcwA5PnfKmCJ3jXkoOtZ4h0BCVIyotgzKUz%2B0VycKS9IbZXKfUnOqk6YG&X-Amz-Signature=9ac3e54c28d439639b5154298bbdfdd71fd9ff3e1c92f0fafdca50a5599e4a0a&X-Amz-SignedHeaders=host&response-content-disposition=inline'})`,
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
