import React from 'react';

export default function AsideMenu() {
	return (
		<aside
			css={{
				position: 'fixed',
				zIndex: 500,
				top: 0,
				bottom: 0,
				left: 0,
				width: '100vw',
				transform: 'translateY(-100%)',
				transition: 'transform .35s ease-in-out',
				backgroundColor: 'rgba(5, 5, 5, .8)',
				'@media (min-width: 768px)': {
					width: '25rem',
					transform: 'translateX(-100%)',
				},
			}}
		>
			<div css={{ position: 'relative' }}>
				<button
					type="button"
					css={{
						position: 'absolute',
						top: 0,
						right: 0,
						transform: 'translateY(-100%)',
						width: '2.5rem',
						height: '2.5rem',
						'@media (min-width: 768px)': {
							transform: 'translateX(100%)',
						},
					}}
				>
					Open
				</button>
			</div>
		</aside>
	);
}
