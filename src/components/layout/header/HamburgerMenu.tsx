import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
import type { NavigationLink } from '../../../types';

export default function FullScreenHamburgerMenu() {
	const [open, setOpen] = useState<boolean>(false);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [open]);

	const handleOpen = () => {
		setOpen(true);
		setTimeout(() => setIsAnimating(true), 10);
	};

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => setOpen(false), 300);
	};

	const links: NavigationLink[] = [
		{ name: 'DOMENE', to: '/domains' },
		{ name: 'GOSTOVANJE', to: '/hosting' },
		{ name: 'WORDPRESS', to: '/wordpress' },
		{ name: 'SPLETNE TRGOVINE', to: '/onlinestores' },
		{ name: 'VPS GOSTOVANJE', to: '/vpshosting' },
		{ name: 'ZNANJE IN NOVOSTI', to: '/' },
	];

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
						<NavLink
							to="/"
							style={{ textDecoration: 'none', color: 'inherit' }}
							onClick={handleClose}
						>
							<Typography
								sx={{
									fontWeight: 700,
									fontSize: '14px',
								}}
							>
								EN
							</Typography>
						</NavLink>

						<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
							<NavLink
								to="/"
								style={{ display: 'flex', alignItems: 'center' }}
								onClick={handleClose}
							>
								<IconButton>
									<PersonOutlineIcon />
								</IconButton>
							</NavLink>
							<NavLink
								to="/"
								style={{ display: 'flex', alignItems: 'center' }}
								onClick={handleClose}
							>
								<IconButton>
									<img src={CartIcon} alt="Košarica" />
								</IconButton>
							</NavLink>
							<IconButton onClick={handleClose}>
								<CloseIcon />
							</IconButton>
						</Box>
					</Box>

					<Divider />

					<List>
						{links.map((link, index) => (
							<React.Fragment key={link.to}>
								<ListItem disablePadding>
									<ListItemButton
										component={NavLink}
										to={link.to}
										onClick={handleClose}
									>
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
													{link.name}
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
