import { atom } from 'nanostores'

export const $active = atom<string>("Analizador De Química Clínica")

export const $isOpen = atom(false)

export function addActive(user: string) {
  $active.set(user);
}


export function setIsOpen(){
 $isOpen.set(!$isOpen)
 
}