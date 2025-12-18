import { Box } from "@mui/material";

export default function TopBorderSection({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
        <Box
            maxWidth="lg"
            sx={{
                background: 'linear-gradient(45deg, #a3e635, #fcd34d, #f87171, #8b5cf6, #3b82f6)',
                borderRadius: 2,
            }}>
            <Box sx={{ mt: 1, p: 6, backgroundColor: "#fff", borderRadius: 2 }}>
                {children}
            </Box>
        </Box>
)}
