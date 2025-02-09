import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

interface GameSelectorProps {
    onGameChange: (value: string) => void;
}

const GameSelector: React.FC<GameSelectorProps> = ({ onGameChange }) => (
    <div className='space-y-2 pt-12 pb-12'>
        <p className='text-white font-semibold'>Game</p>
        <Select onValueChange={onGameChange} defaultValue="fortnite">
            <SelectTrigger className="w-full bg-dark-200 border-dark-300 text-white focus:border-none focus:ring-0">
                <SelectValue className='text-white' placeholder="Select game" />
            </SelectTrigger>
            <SelectContent className='bg-dark-200 border-dark-300'>
                <SelectGroup>
                    <SelectLabel className='text-white'>Which game do you prefer?</SelectLabel>
                    <SelectItem className='text-white focus:text-white hover:bg-dark-300 focus:bg-dark-300' value="beamng">BeamNG.Drive</SelectItem>
                    <SelectItem className='text-white focus:text-white hover:bg-dark-300 focus:bg-dark-300' value="gd">Geometry Dash</SelectItem>
                    <SelectItem className='text-white focus:text-white hover:bg-dark-300 focus:bg-dark-300' value="fortnite">Fortnite</SelectItem>
                    <SelectItem className='text-white focus:text-white hover:bg-dark-300 focus:bg-dark-300' value="lol">League of Legends</SelectItem>
                    <SelectItem className='text-white focus:text-white hover:bg-dark-300 focus:bg-dark-300' value="mc">Minecraft</SelectItem>
                    <SelectItem className='text-white focus:text-white hover:bg-dark-300 focus:bg-dark-300' value="roblox">Roblox</SelectItem>
                    <SelectItem className='text-white focus:text-white hover:bg-dark-300 focus:bg-dark-300' value="valorant">Valorant</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
);

export default GameSelector;
