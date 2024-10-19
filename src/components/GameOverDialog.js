

// GameOverDialog.js
"use client"
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const GameOverDialog = ({ isOpen, onClose, winner, onRestart }) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fin del Juego</DialogTitle>
          <DialogDescription>
            {`El ganador es: ${winner}`}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onRestart}>Jugar de nuevo</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  export default GameOverDialog