import { createFileRoute } from "@tanstack/react-router";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div>
			<section className="p-8">
				<h1 className="text-2xl font-bold text-white">Vehicles</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
					<Card>
						<CardHeader>
							<CardTitle>Test Vehicle</CardTitle>
							<CardDescription>Make: Test Make</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</section>
		</div>
	);
}
