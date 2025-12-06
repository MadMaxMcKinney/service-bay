import { type LucideIcon, Plus } from "lucide-react";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";

interface NavVehiclesProps {
	items: NavVehicleItem[];
	onAddVehicle?: () => void;
}

interface NavVehicleItem {
	title: string;
	url: string;
	icon?: LucideIcon;
	isActive?: boolean;
}

export function NavVehicles({ items, onAddVehicle }: NavVehiclesProps) {
	function handleAddVehicle() {
		if (onAddVehicle) {
			onAddVehicle();
		}
	}
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Vehicles</SidebarGroupLabel>
			<SidebarGroupAction title="Add Vehicle" onClick={handleAddVehicle}>
				<Plus /> <span className="sr-only">Add Vehicle</span>
			</SidebarGroupAction>
			<SidebarMenu>
				{items.map((item) => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton asChild isActive={item.isActive}>
							<a href={item.url}>
								{item.icon && <item.icon />}
								<span>{item.title}</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
