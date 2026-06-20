"use client";

import { useState } from "react";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../../components/ui";

export default function ShowcasePage() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">
        Component Library Showcase
      </h1>

      <Button
        variant="primary"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </Button>

      <Input
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button
        variant="secondary"
        onClick={() => setShowToast(true)}
      >
        Show Toast
      </Button>

      <Loader />

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Demo Modal"
      >
        <p>This is a modal component.</p>
      </Modal>

      {showToast && (
        <Toast message="Toast Notification!" />
      )}
    </div>
  );
}