import {
	Avatar,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import useAuthStore from "../../store/authStore";
import usePreviewImg from "../../hooks/usePreviewImg";
import useEditProfile from "../../hooks/useEditProfile.js";
import useShowToast from "../../hooks/useShowToast";

const EditProfile = ({ isOpen, onClose }) => {
	const [input, setInput] = useState({
		fullName: "",
		username: "",
		bio: ""
	});
	const authUser = useAuthStore((state) => state.user);
	const fileRef = useRef(null);
	const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
	const { isLoading, editProfile } = useEditProfile();
	const showToast = useShowToast();

	const handleEditProfile = async () => {
		try {
			await editProfile(input, selectedFile);
			setSelectedFile(null);
			onClose();
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg={"black"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
					<ModalHeader />
					<ModalCloseButton />
					<ModalBody>
						{/* Container Flex */}
						<Flex bg={"black"}>
							<Stack spacing={4} w={"full"} maxW={"md"} bg={"black"} p={6} my={0}>
								<Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
									Edit Profile
								</Heading>
								<FormControl>
									<Stack direction={["column", "row"]} spacing={6}>
										<Center>
											<Avatar
												size='xl'
												src={selectedFile || authUser.profilePicUrl}
												border={"2px solid white "}
											/>
										</Center>
										<Center w='full'>
											<Button w='full' onClick={() => fileRef.current.click()}>
												Edit Profile Picture
											</Button>
										</Center>
										<Input type='file' hidden ref={fileRef} onChange={handleImageChange} />
									</Stack>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Full Name</FormLabel>
									<Input
										placeholder={"Full Name"}
										size={"sm"}
										type={"text"}
										value={input.fullName || authUser.fullName}
										onChange={(e) => setInput({ ...input, fullName: e.target.value })}
									/>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Username</FormLabel>
									<Input
										placeholder={"Username"}
										size={"sm"}
										type={"text"}
										value={input.username || authUser.username}
										onChange={(e) => setInput({ ...input, username: e.target.value })}
									/>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Bio</FormLabel>
									<Input
										placeholder={"Bio"}
										size={"sm"}
										type={"text"}
										value={input.bio || authUser.bio}
										onChange={(e) => setInput({ ...input, bio: e.target.value })}
									/>
								</FormControl>

								<Stack spacing={6} direction={["column", "row"]}>
									<Button
										bg={"red.400"}
										color={"white"}
										w='full'
										size='sm'
										_hover={{ bg: "red.500" }}
										onClick={onClose}
									>
										Cancel
									</Button>
									<Button
										bg={"blue.400"}
										color={"white"}
										size='sm'
										w='full'
										_hover={{ bg: "blue.500" }}
										onClick={handleEditProfile}
										isLoading={isLoading}
									>
										Submit
									</Button>
								</Stack>
							</Stack>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditProfile;