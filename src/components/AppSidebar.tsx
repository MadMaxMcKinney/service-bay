import {
	BookOpen,
	Car,
	Frame,
	ScanBarcodeIcon,
	Settings2,
	SquareTerminal,
	Wrench,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/NavMain";
import { NavTools } from "@/components/NavTools";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
	navMain: [
		{
			title: "Vehicles",
			url: "#",
			icon: Car,
			isActive: true,
			items: [
				{
					title: "Test",
					url: "/test",
				},
			],
		},
		{
			title: "OBD2 Codes",
			url: "#",
			icon: ScanBarcodeIcon,
		},
		{
			title: "Settings",
			url: "#",
			icon: Settings2,
			items: [
				{
					title: "General",
					url: "#",
				},
				{
					title: "Team",
					url: "#",
				},
				{
					title: "Billing",
					url: "#",
				},
				{
					title: "Limits",
					url: "#",
				},
			],
		},
	],
	tools: [
		{
			name: "OBD2 Code Lookup",
			url: "#",
			icon: Frame,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:p-1.5!"
						>
							<a href="/">
								<Wrench className="size-5" />
								<span className="text-base font-semibold">
									Service Bay
								</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavTools tools={data.tools} />
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
