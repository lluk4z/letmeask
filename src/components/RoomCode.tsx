import { useParams } from 'react-router-dom';
import copyImg from '../assets/images/copy.svg';

import '../styles/roomCode.scss'

type RoomCodeProps = {
	code: string;
}

type RoomParams = {
	id: string;
}

export function RoomCode(props: RoomCodeProps) {
	const params = useParams<RoomParams>();

	function copyRoomCodeToClipboard() {
		navigator.clipboard.writeText(props.code)
	}

	return (
		<button className="room-code" onClick={copyRoomCodeToClipboard}>
			<div>
				<img src={copyImg} alt="Copy room code" />
			</div>
			<span>{ params.id }</span>
		</button>
	)
}