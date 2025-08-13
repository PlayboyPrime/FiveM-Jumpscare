RegisterNetEvent("js_open", function()
	SendNUIMessage({
		action = "open",
	})
	SetNuiFocus(true, false)
	Wait(6000)
	SetNuiFocus(false, false)
end)