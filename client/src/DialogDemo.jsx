import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "./DialogDemo.module.css";
const DialogDemo = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Abrir o Dialog</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />
        <Dialog.Content className={styles.dialogContent}>
          <Dialog.Title>Adicionar Filme</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <Dialog.Close>Fechar</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
