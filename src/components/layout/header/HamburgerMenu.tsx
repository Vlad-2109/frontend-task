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
import NetworkStatusIcon from '../../../assets/icons/ui/network-status.svg';
import UserIcon from '../../../assets/icons/ui/user.svg';
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
					className=" bg-white dark:bg-[#6B7A90] text-[#002b01] dark:text-gray-300"
					sx={{
						position: 'fixed',
						inset: 0,
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
								className="text-[#002b01] dark:text-gray-300"
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
									<PersonOutlineIcon className="text-[#002b01] dark:text-gray-300" />
								</IconButton>
							</NavLink>
							<NavLink
								to="/"
								style={{ display: 'flex', alignItems: 'center' }}
								onClick={handleClose}
							>
								<IconButton>
									<img
										src={CartIcon}
										alt="Košarica"
										className="brightness-0 dark:invert"
									/>
								</IconButton>
							</NavLink>
							<IconButton onClick={handleClose}>
								<CloseIcon className="text-[#002b01] dark:text-gray-300" />
							</IconButton>
						</Box>
					</Box>

					<List>
						{links.map((link, index) => (
							<React.Fragment key={link.to}>
								<ListItem disablePadding>
									<ListItemButton
										component={NavLink}
										to={link.to}
										onClick={handleClose}
										sx={{ pl: 4 }}
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
								{index < 5 && <Divider sx={{ mx: 'auto', width: '90%' }} />}
							</React.Fragment>
						))}
					</List>

					<Divider
						sx={{ borderBottomWidth: 3, my: 2, mx: 'auto', width: '90%' }}
					/>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							px: 3,
							py: 2,
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'start',
								gap: 3,
								width: '50%',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 1,
								}}
							>
								<img
									src={NetworkStatusIcon}
									alt="Stanje omrežja"
									style={{ width: 16, height: 16 }}
								/>
								<Typography sx={{ fontSize: '14px', fontWeight: 700 }}>
									Stanje omrežja
								</Typography>
							</Box>
							<Box>
								<Typography sx={{ fontSize: '12px', fontWeight: 700, mb: 0.5 }}>
									Non-stop 24/7
								</Typography>
								<Typography sx={{ fontSize: '14px', fontWeight: 700 }}>
									podpora@zabec.net
								</Typography>
							</Box>
						</Box>

						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'start',
								gap: 3,
								width: '50%',
								fontSize: '12px',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									gap: 1,
								}}
							>
								<img
									src={UserIcon}
									alt="Moj Žabec"
									className="brightness-0 dark:invert"
									style={{ width: 16, height: 16 }}
								/>
								<Typography sx={{ fontSize: '14px', fontWeight: 700 }}>
									Moj Žabec
								</Typography>
							</Box>
							<Box>
								<Typography sx={{ fontSize: '12px', fontWeight: 700, mb: 0.5 }}>
									Delovniki 8:00-20:00
								</Typography>
								<Typography sx={{ fontSize: '14px', fontWeight: 700 }}>
									040 333 666
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			)}
		</>
	);
}
