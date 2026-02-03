import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CartIcon from '../../../assets/icons/ui/cart.svg';

export default function FullScreenHamburgerMenu() {
	const [open, setOpen] = useState<boolean>(false);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	const handleOpen = () => {
		setOpen(true);
		setTimeout(() => setIsAnimating(true), 10);
	};

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => setOpen(false), 300);
	};

	return (
		<>
			<div className="flex justify-end lg:hidden">
				<IconButton onClick={handleOpen}>
					<MenuIcon />
				</IconButton>
			</div>

			{open && (
				<Box
					sx={{
						position: 'fixed',
						inset: 0,
						bgcolor: 'white',
						zIndex: 1300,
						display: 'flex',
						flexDirection: 'column',
						opacity: isAnimating ? 1 : 0,
						transform: isAnimating ? 'translateX(0)' : 'translateX(100%)',
						transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							px: 2,
							py: 2,
						}}
					>
						<Typography
							sx={{
								fontWeight: 700,
								fontSize: '14px',
							}}
						>
							EN
						</Typography>

						<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
							<IconButton>
								<PersonOutlineIcon />
							</IconButton>
							<IconButton>
								<img src={CartIcon} alt="Košarica" />
							</IconButton>
							<IconButton onClick={handleClose}>
								<CloseIcon />
							</IconButton>
						</Box>
					</Box>

					<Divider />

					<List>
						{[
							'Domene',
							'Gostovanje',
							'Wordpress',
							'Spletne trgovine',
							'VPS gostovanje',
							'Znanje in novosti',
						].map((text, index) => (
							<React.Fragment key={text}>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemText
											primary={
												<Typography
													sx={{
														textTransform: 'uppercase',
														fontFamily: 'Montserrat, sans-serif',
														fontWeight: 800,
														fontSize: '20px',
													}}
												>
													{text}
												</Typography>
											}
										/>
									</ListItemButton>
								</ListItem>
								{index < 5 && <Divider />}
							</React.Fragment>
						))}
					</List>
				</Box>
			)}
		</>
	);
}
