"use client"
import React from 'react';
import { Button } from "@/components/ui/button";

const SmallSquare = ({ value, onClick, disabled }) => (
  <Button
    variant="outline"
    className="h-8 w-8 p-0 text-xs"
    onClick={onClick}
    disabled={disabled}
  >
    {value}
  </Button>
);

export default SmallSquare;
