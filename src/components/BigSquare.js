// BigSquare.js

"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import SmallSquare from './SmallSquare';

const BigSquare = ({ squares, onClick, isActive, winner, ultimateWinner }) => (
  <Card className={`w-32 h-32 relative ${winner ? 'bg-gray-200' : ''} ${isActive ? 'border-4 border-blue-500' : ''}`}>
    <CardContent className="p-1">
      {winner ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 text-4xl font-bold">
          {winner}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-1">
          {squares.map((value, index) => (
            <SmallSquare
              key={index}
              value={value}
              onClick={() => onClick(index)}
              disabled={!isActive || ultimateWinner}
            />
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

export default BigSquare;
