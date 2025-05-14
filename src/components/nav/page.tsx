"use client";

import DeleteDialog from "@/components/lib/modals/delete_modal";
import DisableContributorModal from "@/components/lib/modals/disable_contributor_modal";
import CustomBreadCrumbs from "@/components/lib/navigation/custom_breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  activateAmember,
  deactivateAMember,
  deleteMember,
  getMemberById,
} from "@/services/member";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const MemberProfile = () => {
  const [member, setMember] = useState({});
  const [openRemoved, setOpenRemoved] = useState(false);

  const [openDisable, setOpenDisable] = useState(false);

  const { id: memberId } = useParams();
  const getMember = async () => {
    const response = await getMemberById(memberId);

    setMember(response);
  };
  useEffect(() => {
    getMember();
  }, [memberId, openDisable, openRemoved]);

  const handeDeleteMember = async () => {
    try {
      await deleteMember(memberId);
      toast.success("Contributor(s) removed");

      //   getTeamByEachId();
      // getMember();
    } catch (e: any) {
      toast.error(e?.response?.data?.message);
      // setShow(false);
    } finally {
      setOpenRemoved(false);
    }
  };

  const handleDisableContributor = async () => {
    try {
      await deactivateAMember(memberId);
      toast.success("member deactivated");

      //     getTeamByEachId();
    } catch (e: any) {
      toast.error(e?.response?.data?.message);
      // setShow(false);
    } finally {
      setOpenDisable(false);
    }
  };
  const handleActivate = async () => {
    try {
      await activateAmember(memberId);
      toast.success("member activated");
      getMember();
    } catch (e: any) {
      toast.error(e?.response?.data?.message);
    } finally {
      setOpenDisable(false);
    }
  };

  return (
    <section className="mt-5">
      <div className="mb-8 flex items-center justify-between">
        <CustomBreadCrumbs />
        <div className="inline-flex items-center gap-2">
          <Button
            variant="outline"
            className="items-center gap-2 rounded-[50px] border-main-100 bg-main-100 font-Satoshi text-white"
            //onClick={() => setOpen(true)}
          >
            Save change
          </Button>
        </div>
      </div>
      <div className="mt-5">
        <div className="grid w-full grid-cols-6 gap-4">
          <div className="col-span-2 rounded-[16px] bg-white p-[14px]">
            <h3 className="text-xl font-medium leading-5 text-[#333]">
              Staff information
            </h3>

            <div className="mt-12 flex w-full flex-col gap-[42px]">
              <div className="flex w-full flex-col items-center justify-center gap-5">
                <Image
                  src=""
                  alt=""
                  className="h-[100px] w-[100px] overflow-hidden rounded-full object-center"
                />

                <span className="bg-gradient-to-r from-[#3365E3] to-[#001C62] bg-clip-text font-poppins text-2xl font-bold text-transparent">
                  {/** @ts-ignore */}
                  {member && member.name}
                </span>
              </div>

              <div className="flex w-full flex-col gap-[15px]">
                <div className="flex w-full items-center justify-between">
                  <span className="font-poppins text-sm font-normal text-[#4F4F4F]">
                    Email
                  </span>

                  <span className="font-poppins text-sm font-medium text-[#101828]">
                    {/** @ts-ignore */}
                    {member && member.email}
                  </span>
                </div>
                <div className="flex w-full items-center justify-between">
                  <span className="font-poppins text-sm font-normal text-[#4F4F4F]">
                    Role
                  </span>

                  <span className="font-poppins text-sm font-medium text-[#101828]">
                    {/** @ts-ignore */}
                    {member && member.role}
                  </span>
                </div>

                <div className="flex w-full items-center justify-between">
                  <span className="font-poppins text-sm font-normal text-[#4F4F4F]">
                    Status
                  </span>

                  <span className="font-poppins text-sm font-medium text-[#101828]">
                    {/** @ts-ignore */}
                    {member && member.is_active}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {/** @ts-ignore */}
                {member?.is_active === "active" && (
                  <Button
                    variant="outline"
                    className="items-center gap-2 rounded-[50px] border-0 bg-[#F2994A14] font-Satoshi font-medium text-[#F2994A]"
                    onClick={() => setOpenDisable(true)}
                  >
                    Deactivate account
                  </Button>
                )}

                {/** @ts-ignore */}
                {member?.is_active === "inactive" && (
                  <Button
                    variant="outline"
                    className="items-center gap-2 rounded-[50px] border-main-100 font-Satoshi font-medium text-main-100"
                    onClick={handleActivate}
                  >
                    Activate account
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="items-center gap-2 rounded-[50px] border-[#EB5757] bg-white font-Satoshi text-[#EB5757]"
                  onClick={() => setOpenRemoved(true)}
                >
                  Delete account
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-4 rounded-[16px] bg-white p-[14px]">
            <div className="mt-3 flex flex-col gap-2">
              <h3 className="text-xl font-medium leading-5 text-[#333]">
                Permissions
              </h3>

              <span className="font-poppins text-sm font-normal leading-6 text-[#4F4F4F]">
                Select or deselect a permission to make changes <br /> to what
                certain role have access to
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {member &&
                //@ts-ignore
                member.permissions?.map((data: any, index: any) => (
                  <div
                    key={index}
                    className="cursor-pointer rounded-[67px] bg-[#F8F8F8] px-4 py-2 text-center text-sm font-normal text-[#4F4F4F]"
                  >
                    {data
                      .replace(/_/g, " ")
                      .toLowerCase()
                      .replace(/^\w/, (c: string) => c.toUpperCase())}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <DeleteDialog
        title={"Delete Member"}
        open={openRemoved}
        setOpen={setOpenRemoved}
        buttonText="Remove contributor"
        content={
          "Are you sure you want to delete this member? you can’t activate their account again"
        }
        action={handeDeleteMember}
      />

      <DisableContributorModal
        title={"Deactivate member"}
        buttonText="Deactivate"
        open={openDisable}
        setOpen={setOpenDisable}
        content={"Are you sure you want to deactivate this member?"}
        action={handleDisableContributor}
      />
    </section>
  );
};

export default MemberProfile;
