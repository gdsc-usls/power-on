import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { z } from "zod";

import { studentIdFromEmail } from "../utils/helpers";
import { ConfirmDialog } from "../components/Dialog/Confirm";
import { Member } from "../data";
import { db } from "../config/firebase";

interface RawMember {
  fullName: string;
  email: string;
}

export const Manage = () => {
  const [studentId, setStudentId] = useState("");
  const [fullName, setFullName] = useState("");
  const [members, setMembers] = useState("");
  const [parsedMembers, setParsedMembers] = useState<RawMember[]>([]);

  const [addDialog, setAddDialiog] = useState(false);
  const [importDialog, setImportDialog] = useState(false);

  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const handleAdd = async () => {
    try {
      const payload: Omit<Member, "id"> = {
        fullName,
      };

      await setDoc(doc(db, "certificates/powerOn/members", studentId), payload);
      toast.success("Member added");

      setAddDialiog(false);

      setTimeout(() => {
        setStudentId("");
        setFullName("");
      }, 500);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handlePreview = () => {
    const schema = z.object({
      fullName: z.string(),
      email: z.string(),
    });

    try {
      let invalid = false;
      const _parsedMembers: RawMember[] = JSON.parse(members);
      _parsedMembers.forEach((m) => {
        const data = schema.safeParse(m);
        if (!data.success) {
          toast.error("Contains invalid data");
          invalid = true;
          return;
        }
      });

      setParsedMembers(invalid ? [] : _parsedMembers);

      if (!invalid) {
        setImportDialog(true);
      }
    } catch {
      toast.error("Invalid JSON format");
    }
  };

  const handleImport = () => {
    try {
      parsedMembers.forEach(async (member) => {
        try {
          await setDoc(
            doc(
              db,
              `certificates/powerOn/members/${studentIdFromEmail(member.email)}`
            ),
            {
              fullName: member.fullName,
            }
          );
        } catch (err: any) {
          toast.error(err.message);
        }
      });

      setImportDialog(false);

      setTimeout(() => {
        setParsedMembers([]);
        setMembers("");
      }, 500);

      toast.success("Members added");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleLogin: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (password === import.meta.env.VITE_PASSWORD) {
      setAuthorized(true);
      toast.success("Login successful");
    } else {
      toast.error("Incorrect password");
    }
  };

  if (!authorized) {
    return (
      <form
        onSubmit={handleLogin}
        className="bg-white z-10 flex space-x-4 border border-black rounded-lg items-center px-4 bg-opacity-80"
      >
        <input
          required
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-none font-google outline-none bg-transparent text-xl"
        />
        <button
          type="submit"
          className="border-l border-black hover:text-blue-600 transition-colors text-4xl pl-4 pt-2 pb-3"
        >
          &rarr;
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setAddDialiog(true);
      }}
      className="max-w-screen-sm py-20 mx-auto text-white flex flex-col z-10"
    >
      <ConfirmDialog
        isOpen={addDialog}
        setIsOpen={setAddDialiog}
        handleConfirm={handleAdd}
        content={
          <div>
            <p className="border-b pb-3 text-lg border-secondary-100">
              Are you sure you want to add this member?
            </p>
            <div className="mt-6">
              <p className="text-lg font-bold">{fullName}</p>
              <p>{studentId}</p>
            </div>
          </div>
        }
      />

      <ConfirmDialog
        isOpen={importDialog}
        setIsOpen={setImportDialog}
        handleConfirm={handleImport}
        content={
          <div>
            <p className="border-b pb-2 border-secondary-100">
              Total members to be added: {parsedMembers.length}
            </p>
            <div className="mt-6 p-4 rounded max-h-[300px] overflow-y-scroll">
              <div>
                {parsedMembers.map((m) => {
                  return (
                    <div key={m.email} className="mb-6">
                      <p className="text-lg font-bold">{m.fullName}</p>
                      <p>{studentIdFromEmail(m.email)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        }
      />

      <h1 className="mb-2 text-2xl font-bold">Add Member</h1>
      <div className="grid grid-cols-2 gap-4 text-black">
        <input
          type="text"
          required
          minLength={7}
          maxLength={7}
          className="p-4 rounded outline-none"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />

        <input
          type="text"
          required
          minLength={2}
          maxLength={100}
          className="p-4 rounded outline-none"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 py-4 px-6 rounded self-end mt-4"
      >
        Add Member
      </button>

      <div>
        <h1 className="mb-2 text-2xl font-bold mt-24">Import Members</h1>
        <textarea
          className="p-4 text-black rounded outline-none min-h-[200px] w-full max-h-[500px]"
          placeholder="Paste JSON"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
        />
      </div>

      <button
        type="button"
        onClick={handlePreview}
        className="bg-blue-600 py-4 px-6 rounded self-end mt-4"
      >
        Preview Data
      </button>
    </form>
  );
};
